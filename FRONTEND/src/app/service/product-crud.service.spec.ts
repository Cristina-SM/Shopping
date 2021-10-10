import { TestBed } from '@angular/core/testing';

import { ProductsCrudService } from './product-crud.service';

describe('UserCrudService', () => {
  let service: ProductsCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
