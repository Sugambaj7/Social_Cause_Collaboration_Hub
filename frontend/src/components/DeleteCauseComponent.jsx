
import { useDispatch } from "react-redux";
import { deleteCauseById } from "../features/causes/causeSlice";
import { toast } from "react-toastify";

const DeleteCauseComponent = ({ causeId }) => {
  const dispatch = useDispatch();

  const handleDelete = (causeId) => {
    if (causeId !== null) {
      dispatch(deleteCauseById(causeId)).then(response => {
        if (response.payload.success) {
          toast.success(response.payload.message, {
            position: "top-right",
            autoClose: 5000,
            pauseOnHover: true,
            progress: undefined,
            theme: "light",
            border: "1px solid black",
          });
        } else {
          toast.error(response.payload.message, {
            position: "top-right",
            autoClose: 5000,
            pauseOnHover: true,
            progress: undefined,
            theme: "light",
            border: "1px solid black",
          });
        }
      });
    }
  };

  return (
    <div className="delete-cause">
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-md ml-2"
        onClick={() => handleDelete(causeId)}
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteCauseComponent;
