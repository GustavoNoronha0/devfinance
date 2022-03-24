import { Args, Mutation, Resolver } from '@nestjs/graphql';
import AuthInput from './typings/auth.input';
import AuthService from '../../services/auth/auth.service';
import Auth from './typings/auth.typings';

@Resolver(() => Auth)
export default class AuthResolver {
  constructor(private service: AuthService) { }

  @Mutation(() => Auth)
  async login(
    @Args('input') input: AuthInput,
  ): ReturnType<AuthService['validateUser']> {
    return this.service.validateUser(input);
  }
}