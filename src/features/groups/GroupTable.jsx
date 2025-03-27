import { Trash2 } from "lucide-react";
import { useModal } from "../../hooks/uesModal";
import Button from "../../ui/buttons/Button";
import Buttons from "../../ui/buttons/Buttons";
import Modal from "../../ui/common/Modal";
import GroupTableRow from "../../ui/tables/GroupTableRow";
import Table from "../../ui/tables/Table";
import MobileTableBox from "../../ui/tables/MobileTableBox";
import GroupTableDeleteButton from "../../ui/buttons/GroupTableDeleteButton";

function GroupTable({ groups, type }) {
  const { isOpen, closeModal, openModal } = useModal();

  const title = type === "expense" ? "category" : "source";

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
              <GroupTableDeleteButton onOpen={openModal} />
            </GroupTableRow>
          )}
        ></Table.Body>
      </Table>

      <div className="grid gap-4 text-xs min-[504px]:grid-cols-2 sm:text-sm">
        {groups.map((item, index) => (
          <MobileTableBox
            item={item}
            type="group"
            title={title}
            number={index + 1}
            key={item.name}
          >
            <GroupTableDeleteButton onOpen={openModal} />
          </MobileTableBox>
        ))}
      </div>

      <Modal isOpen={isOpen} onClose={closeModal} closeButton={false}>
        <Buttons>
          <Button type="danger">Delete</Button>
          <Button type="secondary" onClick={closeModal}>
            Cancel
          </Button>
        </Buttons>
      </Modal>
    </>
  );
}

export default GroupTable;
