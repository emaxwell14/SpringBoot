package com.emaxwell.controller;

import com.emaxwell.domain.Note;
import com.emaxwell.service.INoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by User on 15/02/2017.
 */
@RestController
public class NoteController {

    @Autowired
    private INoteService noteService;

    @RequestMapping(value = "/notes", method = RequestMethod.GET)
    public List<Note> getAll() {
        return noteService.getAll();
    }

    @RequestMapping(value="/notes/{id}", method = RequestMethod.GET)
    public Note getNote(@PathVariable("id") int id) {
        Note note = noteService.getNoteById(id);
        return note;
    }

    @RequestMapping(value="/notes/", method = RequestMethod.POST)
    public Note createNote(@RequestBody Note note) {
        return noteService.save(note);
    }

    @RequestMapping(value="/notes/{id}", method = RequestMethod.POST)
    public Note updateNote(@RequestBody Note note) {
        return noteService.save(note);
    }

    @RequestMapping(value="/notes/{id}", method = RequestMethod.DELETE)
    public void deleteNote(@PathVariable int id) {
        noteService.deleteById(id);
    }
}
