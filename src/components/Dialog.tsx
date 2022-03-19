import { SubjectManager } from '@/models/subject-manager.model';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import React, { useEffect, useState } from 'react';
import { Subscription } from 'rxjs';

interface Props {
  children: React.ReactNode;
}

export const dialogOpenSubject$ = new SubjectManager<boolean>();
export const dialogCloseSubject$ = new SubjectManager<boolean>();

export const AlertDialog = ({ children }: Props) => {
  const [open, setOpen] = useState(false);
  let openSubject$ = new Subscription();
  let closeSubject$ = new Subscription();

  useEffect(() => {
    // inicio, cambios
    return () => {
      //destruccion
    };
  }, []);
  useEffect(() => {
    openSubject$ = dialogOpenSubject$.getSubject.subscribe(() => handleClickOpen());
    return () => {
      openSubject$.unsubscribe();
      closeSubject$.unsubscribe();
    };
  }, []);
  const handleClickOpen = () => {
    setOpen(true);
    dialogCloseSubject$.setSubject = true;
  };

  const handleClose = (value = false) => {
    setOpen(false);
    dialogCloseSubject$.setSubject = value;
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={() => handleClose(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {children}
        <DialogActions>
          <Button onClick={() => handleClose(false)} data-testid="dialog-cancel">
            Cancel
          </Button>
          <Button onClick={() => handleClose(true)} data-testid="dialog-confirm" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
