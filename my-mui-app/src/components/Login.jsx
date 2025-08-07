// // src/components/Login.jsx
// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   Container,
//   TextField,
//   Typography,
//   Paper,
// } from '@mui/material';

// const Login = () => {
//   const [formData, setFormData] = useState({ email: '', password: '' });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     console.log('Login submitted:', formData);
//   };

//   return (

//       <Box
//       sx={{
//         height: 'calc(100vh - 64px)', // minus AppBar height if AppBar is 64px
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#f5f5f5',
//       }}
//     >
//    <Paper elevation={3} sx={{ p: 4, width: '100%', maxWidth: 400 }}>
//     <Container maxWidth="sm" sx={{ mt: 8 }}>
      
      
        

//         <Typography variant="h5" gutterBottom align="center">
//           🔐 Login to Your Account
//         </Typography>

//         <Box component="form" onSubmit={handleLogin} sx={{ mt: 2 }}>
//           <TextField
//             fullWidth
//             label="Email"
//             name="email"
//             type="email"
//             variant="outlined"
//             margin="normal"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             fullWidth
//             label="Password"
//             name="password"
//             type="password"
//             variant="outlined"
//             margin="normal"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />

//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             fullWidth
//             sx={{ mt: 2 }}
//           >
//             Login
//           </Button>
//         </Box>
       
//       </Paper>
//     </Container>
//     </Box>
//   );
// };

// export default Login;



// src/components/Login.jsx
import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
} from '@mui/material';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
  };

  return (
    <Box
      sx={{
        height: 'calc(100vh - 64px)', // minus AppBar height if AppBar is 64px
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Paper elevation={3} sx={{ p: 4, width: '100%', maxWidth: 400 }}>
        <Typography variant="h5" gutterBottom align="center">
          🔐 Login to Your Account
        </Typography>

        <Box component="form" onSubmit={handleLogin} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            margin="normal"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
