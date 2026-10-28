interface SoundToggleButtonProps {
  isEnabled: boolean;
  onToggle: () => void;
  className?: string;
}

const SoundToggleButton = ({ isEnabled, onToggle, className = '' }: SoundToggleButtonProps) => (
  <button
    type="button"
    onClick={onToggle}
    className={`h-10 w-10 rounded-full border flex items-center justify-center ${className}`}
    aria-label={isEnabled ? 'Desligar trilha sonora' : 'Ligar trilha sonora'}
    aria-pressed={isEnabled}
    title={isEnabled ? 'Desligar som' : 'Ligar som'}
  >
    <i className={`fa-solid ${isEnabled ? 'fa-volume-high' : 'fa-volume-xmark'} text-base`} aria-hidden="true" />
  </button>
);

export default SoundToggleButton;
