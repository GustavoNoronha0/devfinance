import { Args, Mutation, Resolver } from '@nestjs/graphql';
import AuthInput from './auth.input';
import AuthService from './auth.service';
import Auth from './auth.typings';

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