import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog() {
  const [open, setOpen] = useState(false);

  const onDialogOpenClick = () => {
    setOpen(true);
  };

  /* */
  const onDeleteClick = (e) => {
    setOpen(false);

    console.log(e.target.id);

  };

  const onCancelClick = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button size="small" onClick={onDialogOpenClick}>
        Eliminar
      </Button>
      <Dialog
        open={open}
        onClose={onCancelClick}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        // className='divAlertDialog'
      >
        <DialogTitle id="alert-dialog-title" sx={{ textAlign: 'center' }}>
          {"¿Estás seguro?"}
        </DialogTitle>
        {/* <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent> */}
        <DialogActions>
          <Button onClick={onCancelClick}>Cancelar</Button>
          <Button onClick={(e) => onDeleteClick(e)} autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}