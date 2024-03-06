import ButtonTemplate from "./ButtonTemplate";

function ConfirmDeletion({ itemName, onConfirm, disabled, onCloseModal }) {
    return (
      <div className="w-[25rem] flex flex-col gap-5">
        {/* <h3>Delete {itemName}</h3> */}
        <p className="text-gray-500 dark:text-gray-300">
          Are you sure you want to delete this {itemName} permanently? This
          action cannot be undone.
        </p>
  
        <div className="flex justify-between gap-5">
          <ButtonTemplate type="reset" disabled={disabled} onClick={onCloseModal}>
            Cancel
          </ButtonTemplate>
          <ButtonTemplate type="danger" disabled={disabled} onClick={onConfirm}>
            Delete
          </ButtonTemplate>
        </div>
      </div>
    );
  }
  
  export default ConfirmDeletion;