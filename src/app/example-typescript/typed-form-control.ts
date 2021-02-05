import { FormControl } from '@ngneat/reactive-forms';

const control = new FormControl('');

control.value$.subscribe((value) => {
  //  value is typed as string
  console.log(`Type of value: ${typeof value}`);
});
