import React, { useState } from 'react';
import { X, Lock, CheckCircle, Smartphone } from 'lucide-react';
import { Button } from './Button';
import { PAYSTACK_PUBLIC_KEY, WHATSAPP_GROUP_LINK } from '../constants';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

declare global {
  interface Window {
    PaystackPop: any;
  }
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const payWithPaystack = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const paystack = new window.PaystackPop();
    paystack.newTransaction({
      key: PAYSTACK_PUBLIC_KEY, 
      email: formData.email,
      amount: 15000 * 100, // 15,000 Naira in kobo
      currency: 'NGN',
      metadata: {
        custom_fields: [
          { display_name: "Name", variable_name: "name", value: formData.name },
          { display_name: "Phone", variable_name: "phone", value: formData.phone }
        ]
      },
      onSuccess: (transaction: any) => {
        setLoading(false);
        setStep('success');
      },
      onCancel: () => {
        setLoading(false);
        alert('Transaction was cancelled');
      }
    });
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden relative shadow-2xl animate-pulse-fast">
        {/* Close Button */}
        {step === 'form' && (
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        )}

        {step === 'form' ? (
          <div className="p-8">
            <div className="text-center mb-6">
              <h3 className="font-heading font-bold text-2xl text-gray-900">Secure Your Spot</h3>
              <p className="text-gray-500 text-sm mt-1">Complete registration to join the class</p>
            </div>

            <form onSubmit={payWithPaystack} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  placeholder="080 1234 5678"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div className="pt-2">
                <Button 
                  type="submit" 
                  variant="primary" 
                  fullWidth 
                  disabled={loading}
                  className="flex justify-center"
                >
                  {loading ? 'Processing...' : 'Pay ₦15,000 Now'}
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-4">
                <Lock size={12} />
                <span>Secured by Paystack</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="p-8 text-center bg-green-50 h-full flex flex-col items-center justify-center">
             <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 mx-auto animate-bounce">
               <CheckCircle size={48} />
             </div>
             <h3 className="font-heading font-bold text-2xl text-gray-900 mb-2">Payment Successful!</h3>
             <p className="text-gray-600 mb-8">
               Congratulations! You are officially enrolled. Click the button below to join the private WhatsApp group immediately.
             </p>
             
             <a 
                href={WHATSAPP_GROUP_LINK}
                target="_blank"
                rel="noreferrer"
                className="w-full block bg-[#25D366] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-[#128C7E] transition-colors flex items-center justify-center gap-2"
             >
               <Smartphone size={24} />
               Join WhatsApp Group
             </a>
             <p className="text-xs text-gray-500 mt-4">
               (Please do not share this link with anyone else)
             </p>
          </div>
        )}
      </div>
    </div>
  );
};