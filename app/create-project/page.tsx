import Modal from "@/components/Modal"
import ProjectForm from "@/components/ProjectForm"
import { getCurrentUser } from "@/lib/session"
import { redirect } from "next/navigation";


const CreateProject = async() => {
    const session = await getCurrentUser();
    if(!session?.user) redirect('/')

  return (
    <Modal>
        <div className="flex items-center">
        <h3 className=" modal-head-text ">Create New Project</h3>
        </div>
        <ProjectForm type="create" session={session}/>
    </Modal>
  )
}

export default CreateProject