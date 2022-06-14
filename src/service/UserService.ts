import { User, UserId } from '../model/User';
import userRepository from '../repository/UserRepositoryMemory';
import NotFoundError from '../error/NotFoundError';
import { validate as uuidValidate, version as uuidVersion } from 'uuid';
import InvalidDataError from '../error/InvalidDataError';

function checkId(id: string) {
  if (!uuidValidate(id) && uuidVersion(id) !== 4) {
    throw new InvalidDataError(`Id value ${id} is not valid uuid`);
  }
}

async function findUserOrThrow(id: string) {
  checkId(id);
  const user = await userRepository.findById(id);
  if (!user) {
    throw new NotFoundError(`User with id ${id} not found`);
  }
  return user;
}

function checkUserRequirementsOrThrow(user: User) {
  if (user.username == null || user.age ==null || user.hobbies == null) {
    throw new InvalidDataError('Invalid user data');
  }
}

const UserService = {
  findAll: userRepository.findAll,

  findById: (id: UserId) => findUserOrThrow(id),

  create: async (newUser: User) => {
    checkUserRequirementsOrThrow(newUser);
    return await userRepository.create(newUser);
  },

  update: async (id: UserId, updUser: User) => {
    await findUserOrThrow(id);
    return await userRepository.update({ ...updUser, id });
  },

  delete: async (id: UserId) => {
    await findUserOrThrow(id);
    return await userRepository.delete(id);
  },

};

export default UserService;
