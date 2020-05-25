import { TestBed } from '@angular/core/testing';

import { UiKiGenesisService } from './ui-kit-genesis.service';

describe('UiKiGenesisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UiKiGenesisService = TestBed.get(UiKiGenesisService);
    expect(service).toBeTruthy();
  });
});
