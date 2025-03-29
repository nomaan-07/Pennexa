import { useState } from "react";

import Button from "../../ui/buttons/Button";
import Buttons from "../../ui/buttons/Buttons";
import Modal from "../../ui/common/Modal";
import GroupTableRow from "../../ui/tables/GroupTableRow";
import Table from "../../ui/tables/Table";
import MobileTableBox from "../../ui/tables/MobileTableBox";
import GroupTableDeleteButton from "../../ui/buttons/GroupTableDeleteButton";
import ActionDisabled from "../../ui/buttons/ActionDisabled";

import { useDeleteGroup } from "./useDeleteGroup";
import { useModal } from "../../hooks/uesModal";
import { useToast } from "../../hooks/useToast";
import ActionButtons from "../../ui/common/ActionButtons";

function GroupTable({ groups, type }) {
  const [deleteId, setDeleteId] = useState(null);
  const { isDeleting, deleteGroup } = useDeleteGroup();
  const { isOpen, closeModal, openModal } = useModal();
  const { showToast } = useToast();

  const title = type === "expense" ? "category" : "source";

  function handleOpenDeleteModal(id) {
    setDeleteId(id);
    openModal();
  }

  function handleDeleteGroup() {
    deleteGroup(deleteId, {
      onSuccess: () => {
        showToast("success", "Group successfully deleted.");
        closeModal();
      },
    });
  }

  return (
    <>
      <Table
        type="group"
        columns={
          "grid-cols-[1rem_1fr_2rem_2rem_2rem] xs:grid-cols-[1rem_1fr_2rem_2rem_2.5rem] sm:grid-cols-[1rem_1fr_2rem_2.5rem_3rem]"
        }
      >
        <Table.Header>
          <div>Sl</div>
          <div>{title}</div>
          <div>icon</div>
          <div>color</div>
          <div>action</div>
        </Table.Header>

        <Table.Body
          data={groups}
          render={(group, index) => (
            <GroupTableRow group={group} number={index + 1} key={group.id}>
              {group.public ? (
                <GroupTableDeleteButton
                  onClick={() => handleOpenDeleteModal(group.id)}
                />
              ) : (
                <ActionDisabled />
              )}
            </GroupTableRow>
          )}
        ></Table.Body>
      </Table>

      <div className="grid gap-4 text-xs min-[504px]:grid-cols-2 sm:text-sm">
        {groups.map((group, index) => (
          <MobileTableBox
            item={group}
            type="group"
            title={title}
            number={index + 1}
            key={group.id}
          >
            {group.public ? (
              <GroupTableDeleteButton
                onClick={() => handleOpenDeleteModal(group.id)}
              />
            ) : (
              <ActionDisabled />
            )}
          </MobileTableBox>
        ))}
      </div>

      <ActionButtons
        isOpen={isOpen}
        onClose={closeModal}
        onCancel={closeModal}
        onConfirm={handleDeleteGroup}
        isLoading={isDeleting}
        confirmText="Delete"
        loadingText="Deleting..."
        type="danger"
        message={`Are you sure you want to delete this ${title}?`}
      />
    </>
  );
}

export default GroupTable;
