import { IJellemzok } from "../data.jellemzok";

interface jellemzoProps {
  jellemzo: IJellemzok;
}

export default function Detail({jellemzo}: jellemzoProps) {
  return (
    <div id='jellemzo'>
      <div className="bg-black border-white color-white">
        {jellemzo.nev}
      </div>
    </div>
  );
}


// <div class="fejlec">
//   {{jellemzo.nev}}
// </div>

// <!-- megjegyzés -->
// @if (editMode) {
//   <div class="color-blue bg-black-blue pad03 center">
//     {{jellemzo.megjegyzes}}
//   </div>
// }

// @if (!editMode) {
//   <div class="tartalom" [style.backgroundColor]="(jellemzo.tipus == 'color' ? ertek : 'fff')">
//     {{ertek}} {{jellemzo.egyseg}}
//   </div>
// }

// <!-- text input -->
// @if (jellemzo.tipus == 'text' && editMode && jellemzo.fcName !== 'dns') {
//   <input [id]="jellemzo.fcName" [formControl]="control" [type]="jellemzo.tipus" [value]="ertek" [placeholder]="jellemzo.nev">
// }


// <!-- color input -->
// @if (jellemzo.tipus == 'color' && editMode) {
//   <input [id]="jellemzo.fcName" [formControl]="control" [type]="jellemzo.tipus" [value]="ertek">
// }

// <!-- normal number input -->
// @if (jellemzo.tipus == 'number' && editMode) {
//   <div class="flexCont">
//     <input [id]="jellemzo.fcName" [formControl]="control" [type]="jellemzo.tipus" [placeholder]="jellemzo.nev">
//     <div>{{jellemzo.egyseg}}</div>
//   </div>
// }

// <!-- listázás -->
// @if (jellemzo.lista && editMode) {
//   @for (elem of jellemzo.lista; track $index) {
//     <div class="fejlec" [ngClass]="elem==valasztottErtek? 'selected' : ''" (click)="selectOption(elem)">{{elem}}</div>
//   }
// }

// <!-- gombok -->
// <div  class="buttonCont">
//   @if (editMode) {
//     <button class="buttonYes" type="button" (click)="onSave()">Mentés</button>
//     <button class="buttonNo" type="button" (click)="cancel()">Kilépés</button>
//   }
//   @if (!editMode && s.selected == jellemzo.fcName) {
//     <button class="buttonOptions" type="button" (click)="toggleEdit()">{{jellemzo.nev}} szerkesztés</button>
//   }
// </div>
