import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGotrasComponent } from './list-gotras.component';

describe('ListGotrasComponent', () => {
  let component: ListGotrasComponent;
  let fixture: ComponentFixture<ListGotrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGotrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGotrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
