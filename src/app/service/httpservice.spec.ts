import { Httpservice } from './httpservice';
import { TestBed } from '@angular/core/testing';

describe('Httpservice', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Httpservice = TestBed.get(Httpservice);
    expect(service).toBeTruthy();
  });
});