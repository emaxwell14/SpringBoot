package com.emaxwell.service;

import com.emaxwell.domain.INoteDAO;
import com.emaxwell.domain.Note;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by User on 15/02/2017.
 */
@Service
@Transactional
public class NoteServiceImpl implements INoteService {

    @Autowired
    private INoteDAO noteDAO;

    public List<Note> getAll() {
        return noteDAO.getAll();
    }


    public Note getNoteById(int id) {
        return noteDAO.getNoteById(id);
    }

    public Note save(Note note) {
        return noteDAO.save(note);
    }
}
