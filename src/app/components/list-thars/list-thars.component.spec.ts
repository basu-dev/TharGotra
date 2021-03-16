import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTharsComponent } from './list-thars.component';

describe('ListTharsComponent', () => {
  let component: ListTharsComponent;
  let fixture: ComponentFixture<ListTharsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTharsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTharsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
