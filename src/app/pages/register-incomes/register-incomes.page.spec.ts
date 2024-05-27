import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterIncomesPage } from './register-incomes.page';

describe('RegisterIncomesPage', () => {
  let component: RegisterIncomesPage;
  let fixture: ComponentFixture<RegisterIncomesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegisterIncomesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
