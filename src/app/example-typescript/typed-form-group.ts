import { FormControl, FormGroup } from '@ngneat/reactive-forms';

interface Profile {
  firstName: string;
  lastName: string;
  address: {
    street: string;
    city: string;
  };
}

const profileForm = new FormGroup<Profile>({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  address: new FormGroup({
    street: new FormControl(''),
    city: new FormControl(''),
  }),
});

const newProfile = {
  firstName: '',
  lastName: '',
  address: {
    street: '',
    city: '',
  },
  //    nope: '',   // Uncomment to see error in 'setValue' below
};

//  Typed as Profile
profileForm.setValue(newProfile);

//  Typed as Partial<Profile>
profileForm.patchValue({ firstName: 'Don' });
//  profileForm.patchValue({ firstNamessss: 'Don' } ); // Uncomment to see error

profileForm.value$.subscribe((value) => {
  //  console.log(value);
});
