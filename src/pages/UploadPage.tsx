import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { CloudArrowUpIcon, DocumentIcon } from '@heroicons/react/24/outline';
import { cn } from '../lib/utils';

export function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const validateFile = (file: File): string | null => {
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (!allowedTypes.includes(file.type)) {
      return 'Please upload a PDF, JPG, or PNG file.';
    }

    if (file.size > maxSize) {
      return 'File size must be less than 10MB.';
    }

    return null;
  };

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    setError(null);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      const validationError = validateFile(droppedFile);
      
      if (validationError) {
        setError(validationError);
        return;
      }
      
      setFile(droppedFile);
    }
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      const validationError = validateFile(selectedFile);
      
      if (validationError) {
        setError(validationError);
        return;
      }
      
      setFile(selectedFile);
    }
  };

  const handleParseWithOCR = async () => {
    if (!file) return;

    setUploading(true);
    
    // Simulate OCR processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setUploading(false);
    navigate('/ocr');
  };

  const removeFile = () => {
    setFile(null);
    setError(null);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Upload Soil Report</h1>
        <p className="mt-2 text-gray-600">
          Upload your soil analysis report in PDF, JPG, or PNG format to extract data using OCR.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div
          className={cn(
            'relative border-2 border-dashed rounded-lg p-12 text-center transition-colors',
            dragActive
              ? 'border-primary-500 bg-primary-50'
              : 'border-gray-300 hover:border-gray-400',
            error && 'border-red-300 bg-red-50'
          )}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            id="file-upload"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileInput}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          
          {!file ? (
            <>
              <CloudArrowUpIcon className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Drop your file here, or{' '}
                <label htmlFor="file-upload" className="text-primary-600 hover:text-primary-700 cursor-pointer">
                  browse
                </label>
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Supports PDF, JPG, PNG files up to 10MB
              </p>
            </>
          ) : (
            <div className="space-y-4">
              <DocumentIcon className="mx-auto h-12 w-12 text-green-500" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">{file.name}</h3>
                <p className="text-sm text-gray-500">
                  {(file.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
              <button
                onClick={removeFile}
                className="text-sm text-red-600 hover:text-red-700"
              >
                Remove file
              </button>
            </div>
          )}
        </div>

        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        {file && !error && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleParseWithOCR}
              disabled={uploading}
              className={cn(
                'px-6 py-3 rounded-md font-medium transition-colors',
                uploading
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-primary-600 text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
              )}
            >
              {uploading ? (
                <div className="flex items-center">
                  <div className="animate-spin -ml-1 mr-3 h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                  Processing with OCR...
                </div>
              ) : (
                'Parse with OCR'
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
