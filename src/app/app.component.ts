import {Component} from '@angular/core';
import {isNull} from "@angular/compiler/src/output/output_ast";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  passwordLength = 0;
  includeLetters = false;
  includeUpperLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  isLenghtInputEmpty = true;
  password = '';

  onButtonClick() {
    // console.log("Include letters? " + this.includeLetters);
    // console.log("Include numbers?" + this.includeNumbers);
    // console.log("Include Symbols? " + this.includeSymbols);

    const numbers = '1234567890';
    const letters = 'qwertzuiopüasdfghjköäyxcvbnmß';
    const upperLetters = 'QWERTZUIOPÜASDFGHJKLÖÄYXCVBNM';
    const symbols = '!"§$%&/()=?^°+#*~@€-_,.;:';

    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
      if (this.includeNumbers || this.includeSymbols) {
        validChars += letters;
      }
    }
    if (this.includeUpperLetters) {
      validChars += upperLetters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let index = 0; index < this.passwordLength; index++) {
      const randomDigit = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[randomDigit];
    }
    this.password = generatedPassword;

  }

  getPassword(): string {
    return this.password;
  }

  onChangedLength(event: any) {
    const textInputString = event.target.value;
    this.isLenghtInputEmpty = true;

    if (textInputString !== "") {
      const parsedValue = parseInt(textInputString);

      if (!isNaN(parsedValue) && (parsedValue > 0) && (parsedValue <= 20)) {
        console.log(parsedValue.toString());
        this.isLenghtInputEmpty = false;
        this.passwordLength = parsedValue;
      }
    }
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseLettersUpper() {
    this.includeUpperLetters = !this.includeUpperLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onchangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
}


