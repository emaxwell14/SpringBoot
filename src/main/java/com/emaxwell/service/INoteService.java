package com.emaxwell.service;

import com.emaxwell.domain.Note;

import java.util.List;

/**
 * Created by User on 15/02/2017.
 */
public interface INoteService {
    List<Note> getAll();

    Note getNoteById(int id);

    Note save(Note note);
}
