import React, { useEffect } from 'react';
import UploadIcon from '../UI/Icons/Upload.icon';

// eslint-disable-next-line react/prop-types
function ImageUpload({ file, imageSelector }) {
  return (
    <label className="flex w-full cursor-pointer appearance-none justify-center rounded-md border border-dashed border-gray-300 bg-white px-3 py-6 text-sm transition hover:border-gray-400 focus:border-solid focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75  mb-5">
      <span htmlFor="photo-dropbox" className="flex items-center space-x-2">
        <UploadIcon />
        {file ? (
          // eslint-disable-next-line react/prop-types
          <span className="text-xs font-medium text-gray-800">{file.name}</span>
        ) : (
          <span className="text-xs font-medium text-gray-600">
            Drop files to Attach, or
            <span className="text-blue-600 underline"> browse</span>
          </span>
        )}
      </span>
      <input
        id="photo-dropbox"
        type="file"
        className="sr-only"
        onInputCapture={(e) => imageSelector(e)}
      />
    </label>
  );
}

export default ImageUpload;
