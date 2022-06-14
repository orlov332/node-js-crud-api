import { UserRepository } from './UserRepository';
import { User, UserId } from '../model/User';
import { v4 as uuid } from 'uuid';

const usersInMemory: { [id: UserId]: User } = {};

const inMemoryUserRepository: UserRepository = {

  findAll: async () => Object.values(usersInMemory),

  findById: async (id) => usersInMemory[id],

  create: async (user) => {
    const newUser = { ...user, id: uuid() };
    usersInMemory[newUser.id] = newUser;
    return newUser;
  },

  update: async (updUser) => usersInMemory[updUser.id] = { ...updUser },

  delete: async (id) => {
    const delUser = usersInMemory[id];
    delete usersInMemory[id];
    return delUser;
  },
};

export default inMemoryUserRepository;
