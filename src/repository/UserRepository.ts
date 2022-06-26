import { User, UserId } from '../model/User';

export interface UserRepository {
  findAll: () => Promise<User[]>;

  findById: (id: UserId) => Promise<User | undefined>;

  create: (newUser: User) => Promise<User>;

  update: (updUser: User) => Promise<User>;

  delete: (id: UserId) => Promise<User>;
}
