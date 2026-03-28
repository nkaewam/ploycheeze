import { atom, onSet } from 'nanostores';

export const selectedRole = atom<string>(
  typeof window !== 'undefined' ? sessionStorage.getItem('selectedRole') || '' : ''
);

if (typeof window !== 'undefined') {
  onSet(selectedRole, ({ newValue }) => {
    if (newValue) {
      sessionStorage.setItem('selectedRole', newValue);
    } else {
      sessionStorage.removeItem('selectedRole');
    }
  });
}
