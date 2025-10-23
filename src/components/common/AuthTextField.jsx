import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const AuthTextField = ({
  label,
  placeholder,
  type = 'text',
  icon: Icon,
  value,
  onChange,
  error,
  required = false,
  name,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-white/90 text-sm font-semibold mb-3">
          {label}
          {required && <span className="text-[#E91E63] ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <div
          className={`
            relative flex items-center
            bg-white/[0.08] rounded-xl
            border transition-all duration-200
            ${error ? 'border-red-500 border-2' : isFocused ? 'border-[#E91E63] border-2' : 'border-white/20'}
            hover:border-white/30
          `}
        >
          {Icon && (
            <div className="pl-4 flex items-center">
              <Icon className="w-5 h-5 text-[#E91E63]" />
            </div>
          )}
          <input
            type={inputType}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className={`
              flex-1 bg-transparent px-4 py-4
              text-white placeholder-white/50
              outline-none text-base
              ${Icon ? 'pl-2' : ''}
            `}
          />
          {type === 'password' && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="pr-4 text-white/60 hover:text-white transition-colors"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          )}
        </div>
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-400 font-medium">{error}</p>
      )}
    </div>
  );
};

export default AuthTextField;
