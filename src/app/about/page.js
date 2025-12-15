"use client";

import Button from "../components/button/page.js";
import {FaAddressBook} from 'react-icons/fa';

export default function AboutPage() {
  const handleClick = () => {
    alert("Button clicked!");
  };
  return (
    <div className="min-h-screen p-6">
      <h1>About</h1>
      <p>This is the about page.</p>

      <div className="flex items-center justify-start gap-4">
        <Button
          href="/"
          onClick={handleClick}
          label="Upgrade"
          className="text-lg rounded-sm"
          variant="primary"
        />

        <Button
          href="/"
          onClick={handleClick}
          label="Secondary"
          className="text-lg rounded-md"
          variant="secondary"
          size="medium"
        />

        <Button
          href="/"
          onClick={handleClick}
          label="Success"
          className="text-lg rounded-lg"
          variant="succes"
          size="medium"
        />

        <Button
          href="/"
          onClick={handleClick}
          label="Success"
          className="text-lg rounded-xl"
          variant="succes"
          size="medium"
        />

        <Button
          href="/"
          onClick={handleClick}
          label="Danger"
          className="text-lg rounded-full"
          variant="danger"
          size="large"
        >
          <FaAddressBook className="inline mr-2 mb-1" />
          <span>Delete</span>
        </Button>
      </div>
    </div>
  );
}
