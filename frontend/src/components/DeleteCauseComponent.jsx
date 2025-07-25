
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
        className="hover:underline text-lg tracking-wider"
        onClick={() => handleDelete(causeId)}
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteCauseComponent;
