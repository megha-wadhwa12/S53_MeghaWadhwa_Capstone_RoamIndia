import React, { useContext } from 'react';
import { Image, Upload, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import type { UploadFile, UploadProps } from 'antd/es/upload/interface';
import { AppContext } from '../Context/ParentContext';
const { Dragger } = Upload;

const getBase64 = (file: File) => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
};

const FileUpload: React.FC = () => {
  const appContext = useContext(AppContext);
  if (!appContext) {
    return null;
  }
  const {previewOpen, setPreviewOpen, previewImage, setPreviewImage, fileList, setFileList} = appContext

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as File);
    }
    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const handleUpload = (file: UploadFile) => {
    const formData = new FormData();  
    formData.append('file', file as any);
    fetch('http://localhost:5001/api/upload', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        message.success('Upload successful');
        setFileList([...fileList, {
          uid: data.filename,
          name: data.filename,
          status: 'done',
          url: `http://localhost:5001/${data.filepath}`,
        }]);
      })
      .catch(error => {
        message.error('Upload failed');
        console.error('Error:', error);
      });
  };

  const handleDelete = (file: UploadFile) => {
    fetch(`http://localhost:5001/api/delete/${file.name}`, {
      method: 'DELETE',
    })
      .then(() => {
        message.success('File deleted successfully');
        setFileList(fileList.filter(f => f.uid !== file.uid));
      })
      .catch(error => {
        message.error('Delete failed');
        console.error('Error:', error);
      });
  };


  const uploadButton = (
    <div className='h-128 flex justify-center items-center flex-col gap-3'>
      <PlusOutlined style={{fontSize: '1.5rem'}} />
      <div className='text-md'>Upload</div>
    </div>
  );

  return (
    <div className='flex flex-col gap-5'>
      <Upload
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        onRemove={handleDelete}
        showUploadList={{ showPreviewIcon: true, showRemoveIcon: true }}
      />
      <Dragger
        multiple
        customRequest={({ file }) => handleUpload(file as UploadFile)}
        name="file"
        showUploadList={false}
      >
        {uploadButton}
      </Dragger>
      {previewImage && (
        <Image
          wrapperStyle={{ display: 'none' }}
          preview={{
            visible: previewOpen,
            onVisibleChange: visible => setPreviewOpen(visible),
            afterOpenChange: visible => !visible && setPreviewImage(''),
          }}
          src={previewImage}
        />
      )}
    </div>
  );
};

export default FileUpload;
