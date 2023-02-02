const admin = require('firebase-admin')
admin.initializeApp()

const pushKit = require('./pushKit')
const twilio = require('./twilio')
const triggers = require('./triggers')

// social graph
const socialGraph = require('./socialgraph/socialgraph')
exports.add = socialGraph.add
exports.unfriend = socialGraph.unfriend
exports.unfollow = socialGraph.unfollow
exports.fetchFriends = socialGraph.fetchFriends
exports.fetchFriendships = socialGraph.fetchFriendships
exports.fetchOtherUserFriendships = socialGraph.fetchOtherUserFriendships
exports.searchUsers = socialGraph.searchUsers

// user reporting
const userReporting = require('./user-reporting/user-reporting')
const { onReportWrite } = require('./user-reporting/triggers')
exports.fetchBlockedUsers = userReporting.fetchBlockedUsers
exports.markAbuse = userReporting.markAbuse
exports.unblockUser = userReporting.unblockUser
exports.onReportWrite = onReportWrite

// chat
const chat = require('./chat/chat')
exports.fetchMessagesOfFormerParticipant = chat.fetchMessagesOfFormerParticipant
exports.listMessages = chat.listMessages
exports.insertMessage = chat.insertMessage
exports.insertAVCallMessage = chat.insertAVCallMessage
exports.deleteMessage = chat.deleteMessage
exports.createChannel = chat.createChannel
exports.markAsRead = chat.markAsRead
exports.updateTypingUsers = chat.updateTypingUsers
exports.addMessageReaction = chat.addMessageReaction
exports.updateGroup = chat.updateGroup
exports.leaveGroup = chat.leaveGroup
exports.deleteGroup = chat.deleteGroup

exports.listChannels = chat.listChannels




// exports.sendPushKitNotificationOnUserUpdate = pushKit.sendPushKitNotificationOnUserUpdate;
exports.initiateChatCall = pushKit.initiateChatCall

// Twilio video chat setup
exports.getTwilioAccessToken = twilio

// Production triggers
exports.propagateUserProfileUpdates = triggers.propagateUserProfileUpdates



const imageProcessing = require('./core/imageProcessing')
exports.generateThumbnail = imageProcessing.generateThumbnail;
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
