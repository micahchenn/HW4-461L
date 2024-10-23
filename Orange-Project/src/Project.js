import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import HWSet from './HWSet'; // Import HWSet component
import ProjectDetails from './ProjectDetails'; // Import ProjectDetails component
import './Project.css';

const Project = ({ name, users, isJoined, onJoinLeave }) => {
  const [hwSet1State, setHWSet1State] = useState({ quantity: 50 });
  const [hwSet2State, setHWSet2State] = useState({ quantity: 0 });
  const [customQuantity1, setCustomQuantity1] = useState('');
  const [customQuantity2, setCustomQuantity2] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');

  const handleCheckInOut = (setFunc, action, quantity) => {
    setFunc(prevState => {
      let newQuantity = prevState.quantity;
      if (action === 'checkedIn') {
        newQuantity = Math.min(100, newQuantity + quantity); // Check-in capped at 100
        setDialogMessage(`${quantity} items checked in successfully.`);
      } else {
        newQuantity = Math.max(0, newQuantity - quantity); // Check-out capped at 0
        setDialogMessage(`${quantity} items checked out successfully.`);
      }
      setOpenDialog(true); // Show the dialog 
      return { ...prevState, quantity: newQuantity };
    });
  };

  const handleCustomCheckInOut = (setFunc, action, quantity) => {
    if (!isNaN(quantity) && quantity > 0) {
      handleCheckInOut(setFunc, action, quantity);
    } else {
      setDialogMessage('Please enter a valid quantity.');
      setOpenDialog(true);
    }
  };

  return (
    <div className={`project ${isJoined ? 'joined' : ''}`}>
      {/* Render ProjectDetails with name and users */}
      <ProjectDetails name={name} users={users} />

      <div className="hwSetsContainer">
        <HWSet
          hwSetName="HWSet 1"
          quantity={hwSet1State.quantity}
          onCheckIn={() => handleCustomCheckInOut(setHWSet1State, 'checkedIn', parseInt(customQuantity1))}
          onCheckOut={() => handleCustomCheckInOut(setHWSet1State, 'checkedOut', parseInt(customQuantity1))}
          onQuantityChange={(e) => setCustomQuantity1(e.target.value)}
          customQuantity={customQuantity1}
        />

        <HWSet
          hwSetName="HWSet 2"
          quantity={hwSet2State.quantity}
          onCheckIn={() => handleCustomCheckInOut(setHWSet2State, 'checkedIn', parseInt(customQuantity2))}
          onCheckOut={() => handleCustomCheckInOut(setHWSet2State, 'checkedOut', parseInt(customQuantity2))}
          onQuantityChange={(e) => setCustomQuantity2(e.target.value)}
          customQuantity={customQuantity2}
        />
      </div>

      <Button variant="contained" onClick={onJoinLeave} style={{ marginTop: '20px' }}>
        {isJoined ? 'Leave' : 'Join'}
      </Button>

      {/* Pop-up Modal */}
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Action Performed"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Project;
