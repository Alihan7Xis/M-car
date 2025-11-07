const DeleteModal = ({ isOpen, onClose, onConfirm, carName }) => {
  if (!isOpen) return null;

  const handleContentClick = (e) => e.stopPropagation();

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 z-50"
    >
      <div
        onClick={handleContentClick}
        className="relative w-[514px] min-h-[160px] border border-gray-200 bg-white rounded-xl shadow-lg p-5"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 rounded-xl text-xl p-1 cursor-pointer hover:border border-gray-400 transition"
        >
          ❌
        </button>

        <div className="flex flex-col gap-4 mt-2">
          <p className="font-semibold text-[16px]">Подтвердите удаление</p>
          <p className="text-[15px]">
            Вы уверены, что хотите удалить <b>{carName ? carName : "машину"}</b>
            ?
          </p>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 bg-[#fdfefd] cursor-pointer hover:bg-gray-200 rounded-xl transition"
          >
            Отмена
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-white text-[14px] bg-[#e7000c] cursor-pointer font-bold rounded-xl hover:bg-red-500 transition"
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
