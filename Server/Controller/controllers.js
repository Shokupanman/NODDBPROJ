let messages = [];
let userId = 0;

module.exports = {
  post: (req, res) => {
    let newMessages = { ...req.body, userId };
    ++userId;
    messages.push(newMessages);
    res.status(200).send(messages);
  },
  removeMessage: (req, res) => {
    let { userId } = req.params;
    let index = messages.findIndex(el => el.userId === +userId);
    messages.splice(index, 1);
    res.status(200).send(messages);
  },
  edit: (req, res) => {
    let { userId } = req.params;
    let { message } = req.body;
    let index = messages.findIndex(el => el.userId === +userId);
    messages[index].userId = message;
    res.status(200).send(messages);
  },
  getMessages: (req, res) => {
    res.status(200).send(messages);
  }
};
