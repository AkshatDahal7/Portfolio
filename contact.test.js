import { render, screen, fireEvent } from "@testing-library/react";
import Contact from "@/components/contact";
import emailjs, { send } from "emailjs-com";

jest.mock('emailjs-com', () => ({
  send: jest.fn()
}));

describe('Contact Component', () => {
    it("should send an email successfully", async () => {
        emailjs.send.mockResolvedValueOnce({ message: "ok" });
        render(<Contact />);
      
        const sendButton = screen.getByRole('button', { name: /Say Hello!/i });
        await fireEvent.click(sendButton);
      
        expect(emailjs.send).toHaveBeenCalledWith(
          'service_pkqmsrh', 
          'template_m5uzcn6', 
          expect.objectContaining({
            from_name: expect.any(String),
            to_name: expect.any(String),
            message: expect.any(String),
            user_email: expect.any(String),
          }),
          'czpYN2Q-mIbSXMLrk'
        );
      });
      
      it("should handle the email sending failure", async () => {
        emailjs.send.mockRejectedValueOnce(new Error('Failed to send email'));
        render(<Contact />);
      
        const sendButton = screen.getByRole('button', { name: /Say Hello!/i });
        await fireEvent.click(sendButton);
      
        expect(emailjs.send).toHaveBeenCalledWith(
          'service_pkqmsrh', 
          'template_m5uzcn6', 
          expect.objectContaining({
            from_name: expect.any(String),
            to_name: expect.any(String),
            message: expect.any(String),
            user_email: expect.any(String),
          }),
          'czpYN2Q-mIbSXMLrk'
        );
      
        // Add assertion to check for error handling (e.g., displaying an error message)
      });
});