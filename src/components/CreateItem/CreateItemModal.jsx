import CreateItemForm from './CreateItemForm.jsx';
import GenericModal from '../Modal/GenericModal.jsx'

export default function CreateItemModal({ showModal, onCloseModal }) {
  return (
    <GenericModal showModal={showModal} onCloseModal={onCloseModal}>
      <CreateItemForm onCancel={onCloseModal} />
    </GenericModal>
  );
}
