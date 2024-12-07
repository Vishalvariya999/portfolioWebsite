import { Component, OnInit } from '@angular/core';
import { ContactInfos, DateOfBirth, DateOfJoin, Details, Educations, Experiences, ResumeLink, Skills, SocialMediaLinks } from './entities/details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'latestPortfolio';
  public currentYear!: number;
  public resumeLink = ResumeLink;
  public details = Details;
  public socialMediaLinks = SocialMediaLinks;
  public skills = Skills;
  public educations = Educations;
  public experiences = Experiences;
  public contactInfos = ContactInfos;
  
  private dateOfBirth = DateOfBirth;
  private dateOfJoin = DateOfJoin;
  private baseBirthDate: Date = new Date(this.dateOfBirth);
  private baseDate: Date = new Date(this.dateOfJoin);

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
    this.updateExperience();
    this.updateAge();
  }

  private updateExperience() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const baseYear = this.baseDate.getFullYear();
    const baseMonth = this.baseDate.getMonth();
    let totalYears = currentYear - baseYear;
    let totalMonths = currentMonth - baseMonth;
    if (totalMonths < 0) {
      totalYears -= 1;
      totalMonths += 12;
    }
    const fractionalYears = (totalMonths / 12).toFixed(1);
    const experience = totalYears + parseFloat(fractionalYears);
    this.details.experience = `${experience.toFixed(1)}`;
    console.log('this.details.experience', this.details.experience);
  }

  private updateAge() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    const birthYear = this.baseBirthDate.getFullYear();
    const birthMonth = this.baseBirthDate.getMonth();
    const birthDay = this.baseBirthDate.getDate();
    let age = currentYear - birthYear;
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
      age -= 1;
    }
    this.details.age = age;
    console.log('this.details.age', this.details.age)
  }
}
