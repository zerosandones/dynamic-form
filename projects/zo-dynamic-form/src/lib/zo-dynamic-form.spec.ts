import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoDynamicForm } from './zo-dynamic-form';

describe('ZoDynamicForm', () => {
  let component: ZoDynamicForm;
  let fixture: ComponentFixture<ZoDynamicForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoDynamicForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoDynamicForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
