
import { Switch } from './Switch/switch'
import { useState } from 'react';
import {toast} from 'sonner'

export default function SwitchExample() {
  const [enabled, setEnabled] = useState(true);
  const [_isBlurred, setIsBlurred] = useState(false);

  const handleCompleted = () =>{
    setIsBlurred(true)
    toast.success("Applied changes")
  }

  return (
    <div className="p-6 space-y-4">
      <Switch
        isSelected={enabled}
        onValueChange={setEnabled}
        label="Enable Feature"
        description="Toggles the advanced settings mode"
        size="md"
        //className="bg-black data-[state=checked]:bg-black" 
        onBlur={handleCompleted}
      />

      <p className="text-sm">
        Switch is <strong>{enabled ? "ON" : "OFF"}</strong>
      </p>
    </div>
  );
}