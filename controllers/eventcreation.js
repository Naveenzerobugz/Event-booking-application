var mongoose = require('mongoose');
const eventcreation = mongoose.model('eventcreation');
const eventbooking = mongoose.model('eventbooking');

module.exports = {
    insert(req, res) {
        eventcreation.create({
                eventname: req.body.eventname,
                eventdate: req.body.eventdate,
                totalseats: req.body.totalseats,
                bookedseats: 0,
                eventimg: './eventimg/event.jpg',
                status: 0,
                createddate: (new Date()).toString("yyyy-MM-dd"),
            }).then((event) => {
                res.status(200).send({
                    status: 'success',
                    message: 'Event Added successfully',
                    result: event
                })
            })
            .catch((error) => res.status(400).send({ status: 'Failed', message: error.message }));
    },
    eventlist(req, res) {
        var regex = new RegExp(req.body.eventname, "i")
        return eventcreation.aggregate([{
                $match: {
                    $or: [
                        { 'eventname': regex },
                    ],
                }
            }, {
                $project: {
                    eventname: 1,
                    eventdate: { $dateToString: { format: "%d-%m-%Y", date: "$eventdate" } },
                    eventimg: 1,
                    availableseats: { $subtract: ["$totalseats", "$bookedseats"] }
                }
            }]).then((eventlist) => {
                return res.status(200).send(eventlist)
            })
            .catch((error) => res.status(400).send({ status: 'Failed', message: error.message }));
    },
    bookinginsert(req, res) {
        eventcreation.create({
                eventid: req.body.eventid,
                name: req.body.name,
                email: req.body.email,
                phoneno: req.body.phoneno,
                noofseats: req.body.noofseats,
                attendeenames: req.body.attendeenames,
                status: 0,
                createddate: (new Date()).toString("yyyy-MM-dd"),
            }).then((event) => {

                res.status(200).send({
                    status: 'success',
                    message: 'Tickets booked',
                    result: event
                })
            })
            .catch((error) => res.status(400).send({ status: 'Failed', message: error.message }));
    },
}