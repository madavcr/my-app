import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Text2componentComponent } from './text2component.component';

describe('Text2componentComponent', () => {
  let component: Text2componentComponent;
  let fixture: ComponentFixture<Text2componentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Text2componentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Text2componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
