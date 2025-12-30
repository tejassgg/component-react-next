import { useState } from "react";
import { FaCopy, FaTimes, FaUser } from "react-icons/fa";
import Dropdown from "../dropdown/page";
import Input from "../input/page";
import Button from "../button/page";

export default function InvitationModal() {
  const linkToShareOptions = [
    { value: 0, label: "Anyone with link" },
    { value: 1, label: "Your organization" },
    { value: 2, label: "Restrcited" },
  ];

  const authOptions = [
    { value: 0, label: "Owner" },
    { value: 1, label: "Can Edit" },
    { value: 2, label: "Can View" },
  ];

  const projectMembers = [
    { name: "Tejas Gumgonkar", authOption: 0, email: "tejassgg@gmail.com" },
    { name: "Admin Don", authOption: 1, email: "tejassgg1@gmail.com" },
    { name: "Guppi Bhai", authOption: 2, email: "tejassgg2@gmail.com" },
    { name: "John Doe", authOption: 1, email: "tejassggprojects@gmail.comdit" },
    { name: "Jahnavi Sharma", authOption: 2, email: "jahnavi0506@gmail.com" },
  ];

  const [inviteModalOpen, setInviteModalOpen] = useState(false);
  const openInviteModal = () => {
    setInviteModalOpen(!inviteModalOpen);
  };
  
  const closeInviteModal = () => {
    setInviteModalOpen(!inviteModalOpen);
  };

  return (
    <>
      <Button
        onClick={openInviteModal}
        className="text-lg rounded-2xl text-blue-500"
        variant="transparent"
        size="large"
        label="Invite Member"
      ></Button>
      {inviteModalOpen && (
        <div className="max-w-3xl border border-gray-200 rounded-2xl p-6 shadow-sm shadow-gray-200 w-full flex flex-col gap-6">
          <div className="header flex items-center justify-between border-b pb-4 border-dashed border-gray-300">
            <div className="flex items-center gap-4">
              <span className="bg-gray-200 p-4 rounded-full">
                <FaUser size={22} />
              </span>
              <div className="flex flex-col">
                <h1 className="text-xl font-bold">Invite to Project</h1>
                <h3 className="text-md text-gray-400">
                  Collaborate with members on this project
                </h3>
              </div>
            </div>
            <span className="cursor-pointer p-2 rounded-xl hover:bg-gray-100 transition-all" onClick={closeInviteModal}>
              <FaTimes size={18} />
            </span>
          </div>

          <div className="link-share bg-gray-100 rounded-xl p-4">
            <div className="flex items-center justify-between pb-2 border-b border-dashed border-gray-300">
              <div className="flex flex-col">
                <h1 className="text-lg font-bold">Link to Share</h1>
                <h3 className="text-sm text-gray-400">
                  Anyone with this link can access
                </h3>
              </div>
              <Dropdown
                id="dropdown2"
                options={linkToShareOptions}
                value={linkToShareOptions[0].value}
                buttonClassName="border border-gray-200 rounded-xl p-3 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                listClassName="max-h-48 rounded-lg"
                placeholder="Choose an option"
              />
            </div>
            <div className="flex items-center jusitfy-between mt-4 gap-4">
              <Input
                className="bg-white rounded-xl px-4 py-2 w-full text-black text-md focus:outline-none"
                placeholder="https://wwww.tejasgumgaonkar.netlify..."
              />
              <Button
                href="/"
                className="text-md rounded-2xl text-blue-500 flex items-center "
                variant="transparent"
                size="medium"
              >
                <FaCopy className="inline mr-2 mb-1" />
                <span>Copy</span>
              </Button>
            </div>
          </div>

          <div className="email-section">
            <h1 className="text-xl font-bold">Email</h1>
            <div className="flex items-center jusitfy-between mt-4 gap-4 ">
              <div className="rounded-xl border border-gray-300 flex items-center gap-2 w-full">
                <Input
                  className="bg-white rounded-xl px-4 py-2 w-full text-black text-md focus:outline-none"
                  placeholder="abc@example.com"
                />
                <Dropdown
                  id="dropdown3"
                  options={linkToShareOptions}
                  value={linkToShareOptions[0].value}
                  buttonClassName="p-3 bg-white border-none mr-2"
                  listClassName="max-h-48 rounded-md"
                  placeholder="Choose an option"
                />
              </div>
              <Button
                href="/"
                className="text-md rounded-2xl text-blue-500 flex items-center whitespace-nowrap rounded-xl"
                variant="dark"
                size="medium"
                label="Send Invite"
              />
            </div>
          </div>

          <div className="project-members">
            <h1 className="text-xl font-bold mb-4">Project Members</h1>

            {projectMembers != null &&
              projectMembers.map((mem, index) => (
                <div
                  className="flex items-center justify-between mb-6"
                  key={index}
                >
                  <div className="flex items-center gap-4">
                    <span className="bg-gray-200 p-3 rounded-full">
                      <FaUser size={18} />
                    </span>
                    <div className="flex flex-col">
                      <h1 className="text-lg font-medium">{mem.name}</h1>
                      <h3 className="text-sm text-gray-400">{mem.email}</h3>
                    </div>
                  </div>
                  <Dropdown
                    id={"dropdown" + index}
                    options={authOptions}
                    value={mem.authOption}
                    buttonClassName="border border-gray-200 rounded-xl p-3 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                    listClassName="max-h-48 rounded-md"
                    placeholder="Choose an option"
                  />
                </div>
              ))}
          </div>

          <div className="links"></div>
        </div>
      )}
    </>
  );
}
