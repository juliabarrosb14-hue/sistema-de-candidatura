'use client';

import { useRef, useState } from 'react';
import { RESUME_ACCEPTED_EXTENSIONS } from '@/lib/validation';

const MAX_SIZE_MB = Number(process.env.NEXT_PUBLIC_MAX_RESUME_SIZE_MB || 8);

export function Step4Curriculo({
  arquivo,
  onChange
}: {
  arquivo: File | null;
  onChange: (f: File | null) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [erro, setErro] = useState('');
  const [arrastando, setArrastando] = useState(false);

  function validarESetar(file: File | null) {
    setErro('');
    if (!file) {
      onChange(null);
      return;
    }
    const ext = '.' + file.name.split('.').pop()?.toLowerCase();
    if (!RESUME_ACCEPTED_EXTENSIONS.includes(ext)) {
      setErro('Formato não suportado. Envie um arquivo PDF, DOC ou DOCX.');
      return;
    }
    if (file.size > MAX_SIZE_MB * 1024 * 1024) {
      setErro(`O arquivo excede o limite de ${MAX_SIZE_MB}MB.`);
      return;
    }
    onChange(file);
  }

  return (
    <div>
      <p className="mb-5 text-sm text-neutral-600">Anexe seu currículo para complementar sua candidatura.</p>

      <div
        onDragOver={(e) => {
          e.preventDefault();
          setArrastando(true);
        }}
        onDragLeave={() => setArrastando(false)}
        onDrop={(e) => {
          e.preventDefault();
          setArrastando(false);
          validarESetar(e.dataTransfer.files?.[0] || null);
        }}
        onClick={() => inputRef.current?.click()}
        className={`flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 py-12 text-center transition ${
          arrastando ? 'border-drenesse-red bg-drenesse-red/5' : 'border-neutral-300 hover:border-drenesse-red/60'
        }`}
      >
        <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-drenesse-red/10 text-2xl">
          📄
        </div>
        <p className="text-sm font-semibold text-neutral-800">Clique para selecionar ou arraste seu arquivo aqui</p>
        <p className="mt-1 text-xs text-neutral-400">PDF, DOC ou DOCX · até {MAX_SIZE_MB}MB</p>
        <input
          ref={inputRef}
          type="file"
          accept={RESUME_ACCEPTED_EXTENSIONS.join(',')}
          className="hidden"
          onChange={(e) => validarESetar(e.target.files?.[0] || null)}
        />
      </div>

      {erro && <p className="mt-3 text-sm font-medium text-drenesse-red">{erro}</p>}

      {arquivo && !erro && (
        <div className="mt-4 flex items-center justify-between rounded-xl bg-neutral-50 px-4 py-3">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-drenesse-red text-white">✓</span>
            <div>
              <p className="text-sm font-semibold text-neutral-800">{arquivo.name}</p>
              <p className="text-xs text-neutral-400">{(arquivo.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              validarESetar(null);
              if (inputRef.current) inputRef.current.value = '';
            }}
            className="text-xs font-semibold text-neutral-400 hover:text-drenesse-red"
          >
            Remover
          </button>
        </div>
      )}
    </div>
  );
}
