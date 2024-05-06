import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isSignInGuard } from './is-sign-in.guard';

describe('isSignInGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isSignInGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
