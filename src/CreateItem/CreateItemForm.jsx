import styles from './CreateItemForm.module.css'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query';

export default function CreateItemForm({ onCancel }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitForm = async (data) => {
    const response = await fetch('/api/item', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      throw new Error('Form submission failed');
    }
    return response.json();
  };

  const mutation = useMutation( {
    mutationFn: submitForm,
    onSucess: (data) => {
      console.log('Item created successfully:', data);
    },
    onError: (error) => {
      console.error('Error creating item:', error);
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    mutation.mutate(formData);
    onCancel();
  }

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>Create New Item</div>
      <form className={styles.createItemForm} onSubmit={handleSubmit}>
        <div className={styles.inputSection}>
          <div className={styles.titleTitle}>Title:</div>
          <input type="text" name='title' value={formData.title} onChange={handleChange} placeholder="Title" />
        </div>
        <div className={styles.inputSection}>
          <div className={styles.descriptionTitle}>Description:</div>
          <textarea rows="10" name='description' value={formData.description} onChange={handleChange} placeholder="Description"></textarea>
        </div>
        <div className={styles.inputSection}>
          <div className={styles.priceTitle}>Price:</div>
          <input type="text" name='price' value={formData.price} onChange={handleChange} placeholder="Price" />
        </div>
        <div className={styles.buttonContainer}>
          <button type="button" onClick={onCancel}>Cancel</button>
          <button type="submit" disabled={mutation.isPending}>Submit</button>
        </div>
      </form>
    </div>
  );
}
