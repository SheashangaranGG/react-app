import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function From() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Buses}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="From" />}
    />
  );
}
const Buses = [
  { label: 'Chennai' },
  { label: 'Madurai'  },
  { label: 'Vellor' },
  { label: 'Chrompat'},
  { label: 'Abu Road' },
  { label: 'Abids' },
  { label: 'Abinay' },
  { label: 'Adyar' },
  { label: 'salem' },
  { label: 'Coimbatore' },
  { label: 'Chengalpattu' },
  { label: 'Cuddalore' },
  { label: 'Dharmapuri' },
  { label: 'Dindigul' },
  { label: 'Erode' },
  { label: 'Kallakurichi' },
  { label: 'Karur' },
  { label: 'Kancheepuram' },
  { label: 'Krishnagiri' },
  { label: 'Mayiladuthurai' },
  { label: 'Nagapattinam' },
  { label: 'Kanniyakumari' },
  { label: 'perambalur' },
  { label: 'Pudukottai' },
  { label: 'Ramanathapuram' },
  { label: 'Ranipet' },
  { label: 'Salem' },
  { label: 'Sivagangai' },
  { label: 'Tenkasi' },
  { label: 'Thanjavur' },
  { label: 'Theni' },
  { label: 'Thiruvallur' },
  { label: 'Thiruvarur'},
  { label: 'Thoothukudi'},
  { label: 'Trichirappali'},
  { label: 'Thirunelveli'},
  { label: 'Tirupathur'},
  { label: 'Tiruppur'},
  { label: 'Tiruvannamalai'},
  { label: 'The Nilgiris'},
  { label: 'Vellore'},
  { label: 'Viluppuram'},
  { label: 'Vilrudhunagar'},
  { label: 'Namakkal'  },
];