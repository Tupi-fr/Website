'use client';

import { useState, useRef } from 'react';
import { useLanguage } from './LanguageSelector';

export default function NewContactSection() {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleTextareaInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    const lineHeight = 20;
    const paddingVertical = 24;
    const singleLineHeight = lineHeight + paddingVertical; // 44px
    
    textarea.style.height = 'auto';
    
    // Count actual lines by checking if content wraps
    const lines = textarea.value.split('\n').length;
    if (lines === 1 && !textarea.value.includes('\n')) {
      // Single line or empty - keep original height
      textarea.style.height = singleLineHeight + 'px';
    } else {
      // Multiple lines - use scroll height
      textarea.style.height = Math.max(textarea.scrollHeight, singleLineHeight) + 'px';
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xpwzgvpn', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="min-h-screen bg-[#FAF4EC] flex items-center justify-center py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl text-[#1A1A1A] mb-4" style={{ fontFamily: 'Calistoga, serif' }}>
            {t('contact.thanks')}
          </h2>
          <p className="text-[#1A1A1A]/80 text-base leading-relaxed mb-8">
            {t('contact.thanks.desc')}
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="bg-[#E85D3F] text-white rounded-full px-6 py-2 text-sm shadow hover:bg-[#d44e35]"
          >
            {t('contact.another')}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#FAF4EC] flex flex-col">
      <div className="flex-1 flex items-center justify-center py-20">
        <div className="max-w-6xl mx-auto px-6 pl-32">
          <div className="flex items-center gap-32">
            {/* Left side - Contact form */}
            <div className="w-1/2" style={{ marginLeft: '160px' }}>
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '24px' }}>
                  <input
                    type="text"
                    name="name"
                    placeholder={t('contact.name')}
                    required
                    className="w-full"
                    style={{
                      padding: '12px 0',
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderBottom: '1px solid #266659',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      color: '#1A1A1A',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <input
                    type="email"
                    name="email"
                    placeholder={t('contact.email')}
                    required
                    className="w-full"
                    style={{
                      padding: '12px 0',
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderBottom: '1px solid #266659',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      color: '#1A1A1A',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <textarea
                    ref={textareaRef}
                    name="message"
                    placeholder={t('contact.message')}
                    required
                    className="w-full resize-none"
                    onInput={handleTextareaInput}
                    style={{
                      padding: '12px 0',
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderBottom: '1px solid #266659',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      color: '#1A1A1A',
                      outline: 'none',
                      height: '44px',
                      minHeight: '44px',
                      overflow: 'hidden',
                      lineHeight: '20px'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{ 
                    backgroundColor: 'transparent', 
                    color: '#266659', 
                    border: '1px solid #266659', 
                    padding: '12px 24px', 
                    borderRadius: '8px', 
                    margin: '4px',
                    cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: '500'
                  }}
                  className="transition-all duration-200"
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#266659';
                    e.target.style.color = 'white';
                    e.target.style.border = '1px solid #266659';
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#266659';
                      e.target.style.border = '1px solid #266659';
                    }
                  }}
                >
                  {isSubmitting ? t('contact.sending') : t('contact.send')}
                </button>
              </form>
            </div>

            {/* Right side - Text content */}
            <div className="w-1/2" style={{ marginLeft: '120px', width: '50%', maxWidth: '400px' }}>
              <h2 className="text-3xl text-[#1A1A1A] mb-6" style={{ fontFamily: 'Calistoga, serif' }}>
                {t('contact.title')}
              </h2>
              <p className="text-[#1A1A1A]/80 text-base leading-relaxed">
                {t('contact.desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Legal Banner - Sticks to bottom */}
      <div className="bg-[#266659] py-4">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: 'white' }}>
            {t('legal.text')}
          </p>
        </div>
      </div>
    </section>
  );
}