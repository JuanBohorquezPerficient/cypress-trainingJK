class PersonalFormPage{
    private formUrl: string;
    private nameField: string;
    private lastNameField: string;
    private emailField: string;
    private gender: string;
    private mobileNumberField: string;
    private currentAddressField: string;
    private stateList: string;
    private hobbiesOption1: string;
    private hobbiesOption2: string;
    private submitBtn: string;
    private genderType: string;
    private choosenState: string;
    private choosenCity: string;
    private cityList: string;

    personalInformation = {
        name: "Holmes",
        lastName: "Salazar",
        email: "hibarras@email.com",
        gender: "Male",
        mobileNumber: "3656589156",
        hobbies: ["Music", "Reading"],
        currentAddress: "Av siempreViva # 123",
      };

    constructor(){
        this.formUrl = "https://demoqa.com/automation-practice-form";
        this.nameField = "#firstName";
        this.lastNameField = "#lastName";
        this.emailField = "#userEmail";
        this.gender = "[type=\"radio\"]";
        this.mobileNumberField = "#userNumber";
        this.currentAddressField = "#currentAddress";
        this.stateList = "#state > div > div.css-1hwfws3 > div.css-1wa3eu0-placeholder";
        this.cityList = "#city > div > div.css-1hwfws3 > div.css-1wa3eu0-placeholder"
        this.submitBtn = "#submit";
        this.hobbiesOption1 = '#hobbiesWrapper > .col-md-9 > :nth-child(2) > .custom-control-label';
        this.hobbiesOption2 = '#hobbiesWrapper > .col-md-9 > :nth-child(3) > .custom-control-label';
        this.genderType = "Male";
        this.choosenState = "#react-select-3-option-0";
        this.choosenCity = "#react-select-4-option-0";
    }

    public enterToTargetUrl(): void{
        cy.visit(this.formUrl);
    }

    public fillForm(personalInformation : {
        name: string,
        lastName: string,
        email: string,
        gender: string,
        mobileNumber: string,
        hobbies: string[],
        currentAddress: string
    }): void{
        cy.get(this.nameField).type(personalInformation.name);
        cy.get(this.lastNameField).type(personalInformation.lastName);
        cy.get(this.emailField).type(personalInformation.email);
        cy.get(this.gender).check(this.genderType, {force:true});
        cy.get(this.mobileNumberField).type(personalInformation.mobileNumber);
        cy.get(this.hobbiesOption1).click();
        cy.get(this.hobbiesOption2).click();
        cy.get(this.currentAddressField).type(personalInformation.currentAddress);
        cy.get(this.stateList).click({force:true});
        cy.get(this.choosenState).click({force:true});
        cy.get(this.cityList).click({force:true});
        cy.get(this.choosenCity).click({force:true});
        cy.get(this.submitBtn).click({force:true});
    }
}

export{PersonalFormPage}