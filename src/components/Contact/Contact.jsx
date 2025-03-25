import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-b from-gray-800 to-gray-900"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-12">
          Entre em Contato
        </h2>

        <form className="mt-8 max-w-3xl mx-auto space-y-6">
          <motion.input
            type="text"
            placeholder="Seu Nome"
            className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />

          <motion.input
            type="email"
            placeholder="Seu Email"
            className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />

          <motion.textarea
            placeholder="Sua Mensagem"
            rows="5"
            className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          ></motion.textarea>

          <motion.button
            type="submit"
            className="w-full px-6 py-3 bg-purple-500 text-white rounded-lg shadow-lg hover:bg-purple-600 transition duration-300"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Enviar Mensagem
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
