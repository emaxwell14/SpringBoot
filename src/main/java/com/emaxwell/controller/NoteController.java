package com.emaxwell.controller;

import com.emaxwell.domain.Note;
import com.emaxwell.service.INoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

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
        return noteService.getNoteById(id);
    }

    @RequestMapping(value="/notes/save", method = RequestMethod.GET)
    public Note updateNote() {
        Note note = new Note("Note 1", "Description");
        return noteService.save(note);
    }
}
